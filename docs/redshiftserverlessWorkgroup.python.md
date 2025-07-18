# `redshiftserverlessWorkgroup` Submodule <a name="`redshiftserverlessWorkgroup` Submodule" id="@cdktf/provider-aws.redshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessWorkgroup <a name="RedshiftserverlessWorkgroup" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_name: str,
  workgroup_name: str,
  base_capacity: typing.Union[int, float] = None,
  config_parameter: typing.Union[IResolvable, typing.List[RedshiftserverlessWorkgroupConfigParameter]] = None,
  enhanced_vpc_routing: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_capacity: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  price_performance_target: RedshiftserverlessWorkgroupPricePerformanceTarget = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  region: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RedshiftserverlessWorkgroupTimeouts = None,
  track_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.baseCapacity">base_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.configParameter">config_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]</code> | config_parameter block. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#id RedshiftserverlessWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.pricePerformanceTarget">price_performance_target</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | price_performance_target block. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags_all RedshiftserverlessWorkgroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.trackName">track_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}.

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.workgroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}.

---

##### `base_capacity`<sup>Optional</sup> <a name="base_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.baseCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}.

---

##### `config_parameter`<sup>Optional</sup> <a name="config_parameter" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.configParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]

config_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#config_parameter RedshiftserverlessWorkgroup#config_parameter}

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#id RedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}.

---

##### `price_performance_target`<sup>Optional</sup> <a name="price_performance_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.pricePerformanceTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

price_performance_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#region RedshiftserverlessWorkgroup#region}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags_all RedshiftserverlessWorkgroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#timeouts RedshiftserverlessWorkgroup#timeouts}

---

##### `track_name`<sup>Optional</sup> <a name="track_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.trackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameter">put_config_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget">put_price_performance_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity">reset_base_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameter">reset_config_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting">reset_enhanced_vpc_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget">reset_price_performance_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName">reset_track_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config_parameter` <a name="put_config_parameter" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameter"></a>

```python
def put_config_parameter(
  value: typing.Union[IResolvable, typing.List[RedshiftserverlessWorkgroupConfigParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]

---

##### `put_price_performance_target` <a name="put_price_performance_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget"></a>

```python
def put_price_performance_target(
  enabled: typing.Union[bool, IResolvable],
  level: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enabled RedshiftserverlessWorkgroup#enabled}.

---

###### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget.parameter.level"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#create RedshiftserverlessWorkgroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#delete RedshiftserverlessWorkgroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#update RedshiftserverlessWorkgroup#update}.

---

##### `reset_base_capacity` <a name="reset_base_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity"></a>

```python
def reset_base_capacity() -> None
```

##### `reset_config_parameter` <a name="reset_config_parameter" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameter"></a>

```python
def reset_config_parameter() -> None
```

##### `reset_enhanced_vpc_routing` <a name="reset_enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting"></a>

```python
def reset_enhanced_vpc_routing() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_price_performance_target` <a name="reset_price_performance_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget"></a>

```python
def reset_price_performance_target() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_track_name` <a name="reset_track_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName"></a>

```python
def reset_track_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftserverlessWorkgroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftserverlessWorkgroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftserverlessWorkgroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameter">config_parameter</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList">RedshiftserverlessWorkgroupConfigParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList">RedshiftserverlessWorkgroupEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget">price_performance_target</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference">RedshiftserverlessWorkgroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupId">workgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput">base_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameterInput">config_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput">enhanced_vpc_routing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput">price_performance_target_input</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput">track_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity">base_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName">track_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `config_parameter`<sup>Required</sup> <a name="config_parameter" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameter"></a>

```python
config_parameter: RedshiftserverlessWorkgroupConfigParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList">RedshiftserverlessWorkgroupConfigParameterList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.endpoint"></a>

```python
endpoint: RedshiftserverlessWorkgroupEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList">RedshiftserverlessWorkgroupEndpointList</a>

---

##### `price_performance_target`<sup>Required</sup> <a name="price_performance_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget"></a>

```python
price_performance_target: RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.timeouts"></a>

```python
timeouts: RedshiftserverlessWorkgroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference">RedshiftserverlessWorkgroupTimeoutsOutputReference</a>

---

##### `workgroup_id`<sup>Required</sup> <a name="workgroup_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupId"></a>

```python
workgroup_id: str
```

- *Type:* str

---

##### `base_capacity_input`<sup>Optional</sup> <a name="base_capacity_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput"></a>

```python
base_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `config_parameter_input`<sup>Optional</sup> <a name="config_parameter_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameterInput"></a>

```python
config_parameter_input: typing.Union[IResolvable, typing.List[RedshiftserverlessWorkgroupConfigParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]

---

##### `enhanced_vpc_routing_input`<sup>Optional</sup> <a name="enhanced_vpc_routing_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput"></a>

```python
enhanced_vpc_routing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `price_performance_target_input`<sup>Optional</sup> <a name="price_performance_target_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput"></a>

```python
price_performance_target_input: RedshiftserverlessWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedshiftserverlessWorkgroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a>]

---

##### `track_name_input`<sup>Optional</sup> <a name="track_name_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput"></a>

```python
track_name_input: str
```

- *Type:* str

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `base_capacity`<sup>Required</sup> <a name="base_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity"></a>

```python
base_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enhanced_vpc_routing`<sup>Required</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `track_name`<sup>Required</sup> <a name="track_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName"></a>

```python
track_name: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessWorkgroupConfig <a name="RedshiftserverlessWorkgroupConfig" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_name: str,
  workgroup_name: str,
  base_capacity: typing.Union[int, float] = None,
  config_parameter: typing.Union[IResolvable, typing.List[RedshiftserverlessWorkgroupConfigParameter]] = None,
  enhanced_vpc_routing: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_capacity: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  price_performance_target: RedshiftserverlessWorkgroupPricePerformanceTarget = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  region: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RedshiftserverlessWorkgroupTimeouts = None,
  track_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity">base_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameter">config_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]</code> | config_parameter block. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#id RedshiftserverlessWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget">price_performance_target</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | price_performance_target block. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags_all RedshiftserverlessWorkgroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName">track_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}.

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}.

---

##### `base_capacity`<sup>Optional</sup> <a name="base_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity"></a>

```python
base_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}.

---

##### `config_parameter`<sup>Optional</sup> <a name="config_parameter" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameter"></a>

```python
config_parameter: typing.Union[IResolvable, typing.List[RedshiftserverlessWorkgroupConfigParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]

config_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#config_parameter RedshiftserverlessWorkgroup#config_parameter}

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#id RedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}.

---

##### `price_performance_target`<sup>Optional</sup> <a name="price_performance_target" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget"></a>

```python
price_performance_target: RedshiftserverlessWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

price_performance_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#region RedshiftserverlessWorkgroup#region}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#tags_all RedshiftserverlessWorkgroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.timeouts"></a>

```python
timeouts: RedshiftserverlessWorkgroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#timeouts RedshiftserverlessWorkgroup#timeouts}

---

##### `track_name`<sup>Optional</sup> <a name="track_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName"></a>

```python
track_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}.

---

### RedshiftserverlessWorkgroupConfigParameter <a name="RedshiftserverlessWorkgroupConfigParameter" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter(
  parameter_key: str,
  parameter_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter.property.parameterKey">parameter_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter.property.parameterValue">parameter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}. |

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}.

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}.

---

### RedshiftserverlessWorkgroupEndpoint <a name="RedshiftserverlessWorkgroupEndpoint" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpoint()
```


### RedshiftserverlessWorkgroupEndpointVpcEndpoint <a name="RedshiftserverlessWorkgroupEndpointVpcEndpoint" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpoint()
```


### RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface <a name="RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface()
```


### RedshiftserverlessWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupPricePerformanceTarget" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget(
  enabled: typing.Union[bool, IResolvable],
  level: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enabled RedshiftserverlessWorkgroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level">level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#enabled RedshiftserverlessWorkgroup#enabled}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

### RedshiftserverlessWorkgroupTimeouts <a name="RedshiftserverlessWorkgroupTimeouts" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#create RedshiftserverlessWorkgroup#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#delete RedshiftserverlessWorkgroup#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#update RedshiftserverlessWorkgroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#create RedshiftserverlessWorkgroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#delete RedshiftserverlessWorkgroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_workgroup#update RedshiftserverlessWorkgroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessWorkgroupConfigParameterList <a name="RedshiftserverlessWorkgroupConfigParameterList" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessWorkgroupConfigParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RedshiftserverlessWorkgroupConfigParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]]

---


### RedshiftserverlessWorkgroupConfigParameterOutputReference <a name="RedshiftserverlessWorkgroupConfigParameterOutputReference" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterKeyInput">parameter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterKey">parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_key_input`<sup>Optional</sup> <a name="parameter_key_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterKeyInput"></a>

```python
parameter_key_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedshiftserverlessWorkgroupConfigParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameter">RedshiftserverlessWorkgroupConfigParameter</a>]

---


### RedshiftserverlessWorkgroupEndpointList <a name="RedshiftserverlessWorkgroupEndpointList" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessWorkgroupEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedshiftserverlessWorkgroupEndpointOutputReference <a name="RedshiftserverlessWorkgroupEndpointOutputReference" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint">vpc_endpoint</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList">RedshiftserverlessWorkgroupEndpointVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpoint">RedshiftserverlessWorkgroupEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_endpoint`<sup>Required</sup> <a name="vpc_endpoint" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint"></a>

```python
vpc_endpoint: RedshiftserverlessWorkgroupEndpointVpcEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList">RedshiftserverlessWorkgroupEndpointVpcEndpointList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessWorkgroupEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpoint">RedshiftserverlessWorkgroupEndpoint</a>

---


### RedshiftserverlessWorkgroupEndpointVpcEndpointList <a name="RedshiftserverlessWorkgroupEndpointVpcEndpointList" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList <a name="RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference <a name="RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a>

---


### RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference <a name="RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpoint">RedshiftserverlessWorkgroupEndpointVpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface"></a>

```python
network_interface: RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">RedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a>

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessWorkgroupEndpointVpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupEndpointVpcEndpoint">RedshiftserverlessWorkgroupEndpointVpcEndpoint</a>

---


### RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel">reset_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_level` <a name="reset_level" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput">level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level">level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```python
level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---


### RedshiftserverlessWorkgroupTimeoutsOutputReference <a name="RedshiftserverlessWorkgroupTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_workgroup

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedshiftserverlessWorkgroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTimeouts">RedshiftserverlessWorkgroupTimeouts</a>]

---



