# `dataAwsIamPrincipalPolicySimulation` Submodule <a name="`dataAwsIamPrincipalPolicySimulation` Submodule" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamPrincipalPolicySimulation <a name="DataAwsIamPrincipalPolicySimulation" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_names: typing.List[str],
  policy_source_arn: str,
  additional_policies_json: typing.List[str] = None,
  caller_arn: str = None,
  context: typing.Union[IResolvable, typing.List[DataAwsIamPrincipalPolicySimulationContext]] = None,
  permissions_boundary_policies_json: typing.List[str] = None,
  resource_arns: typing.List[str] = None,
  resource_handling_option: str = None,
  resource_owner_account_id: str = None,
  resource_policy_json: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.actionNames">action_names</a></code> | <code>typing.List[str]</code> | One or more names of actions, like "iam:CreateUser", that should be included in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.policySourceArn">policy_source_arn</a></code> | <code>str</code> | ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.additionalPoliciesJson">additional_policies_json</a></code> | <code>typing.List[str]</code> | Additional principal-based policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.callerArn">caller_arn</a></code> | <code>str</code> | ARN of a user to use as the caller of the simulated requests. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.context">context</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]</code> | context block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.permissionsBoundaryPoliciesJson">permissions_boundary_policies_json</a></code> | <code>typing.List[str]</code> | Additional permission boundary policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | ARNs of specific resources to use as the targets of the specified actions during simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceHandlingOption">resource_handling_option</a></code> | <code>str</code> | Specifies the type of simulation to run. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceOwnerAccountId">resource_owner_account_id</a></code> | <code>str</code> | An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourcePolicyJson">resource_policy_json</a></code> | <code>str</code> | A resource policy to associate with all of the target resources for simulation purposes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_names`<sup>Required</sup> <a name="action_names" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.actionNames"></a>

- *Type:* typing.List[str]

One or more names of actions, like "iam:CreateUser", that should be included in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}

---

##### `policy_source_arn`<sup>Required</sup> <a name="policy_source_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.policySourceArn"></a>

- *Type:* str

ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}

---

##### `additional_policies_json`<sup>Optional</sup> <a name="additional_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.additionalPoliciesJson"></a>

- *Type:* typing.List[str]

Additional principal-based policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}

---

##### `caller_arn`<sup>Optional</sup> <a name="caller_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.callerArn"></a>

- *Type:* str

ARN of a user to use as the caller of the simulated requests.

If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.context"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]

context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}

---

##### `permissions_boundary_policies_json`<sup>Optional</sup> <a name="permissions_boundary_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.permissionsBoundaryPoliciesJson"></a>

- *Type:* typing.List[str]

Additional permission boundary policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceArns"></a>

- *Type:* typing.List[str]

ARNs of specific resources to use as the targets of the specified actions during simulation.

If not specified, the simulator assumes "*" which represents general access across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}

---

##### `resource_handling_option`<sup>Optional</sup> <a name="resource_handling_option" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceHandlingOption"></a>

- *Type:* str

Specifies the type of simulation to run.

Some API operations need a particular resource handling option in order to produce a correct reesult.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}

---

##### `resource_owner_account_id`<sup>Optional</sup> <a name="resource_owner_account_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourceOwnerAccountId"></a>

- *Type:* str

An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID.

Defaults to the account given as part of caller_arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}

---

##### `resource_policy_json`<sup>Optional</sup> <a name="resource_policy_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.Initializer.parameter.resourcePolicyJson"></a>

- *Type:* str

A resource policy to associate with all of the target resources for simulation purposes.

The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext">put_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetAdditionalPoliciesJson">reset_additional_policies_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetCallerArn">reset_caller_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetPermissionsBoundaryPoliciesJson">reset_permissions_boundary_policies_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceArns">reset_resource_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceHandlingOption">reset_resource_handling_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceOwnerAccountId">reset_resource_owner_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourcePolicyJson">reset_resource_policy_json</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_context` <a name="put_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext"></a>

```python
def put_context(
  value: typing.Union[IResolvable, typing.List[DataAwsIamPrincipalPolicySimulationContext]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.putContext.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]

---

##### `reset_additional_policies_json` <a name="reset_additional_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetAdditionalPoliciesJson"></a>

```python
def reset_additional_policies_json() -> None
```

##### `reset_caller_arn` <a name="reset_caller_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetCallerArn"></a>

```python
def reset_caller_arn() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_permissions_boundary_policies_json` <a name="reset_permissions_boundary_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetPermissionsBoundaryPoliciesJson"></a>

```python
def reset_permissions_boundary_policies_json() -> None
```

##### `reset_resource_arns` <a name="reset_resource_arns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceArns"></a>

```python
def reset_resource_arns() -> None
```

##### `reset_resource_handling_option` <a name="reset_resource_handling_option" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceHandlingOption"></a>

```python
def reset_resource_handling_option() -> None
```

##### `reset_resource_owner_account_id` <a name="reset_resource_owner_account_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourceOwnerAccountId"></a>

```python
def reset_resource_owner_account_id() -> None
```

##### `reset_resource_policy_json` <a name="reset_resource_policy_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.resetResourcePolicyJson"></a>

```python
def reset_resource_policy_json() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsIamPrincipalPolicySimulation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsIamPrincipalPolicySimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIamPrincipalPolicySimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.allAllowed">all_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.context">context</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList">DataAwsIamPrincipalPolicySimulationContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.results">results</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList">DataAwsIamPrincipalPolicySimulationResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNamesInput">action_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJsonInput">additional_policies_json_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArnInput">caller_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.contextInput">context_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJsonInput">permissions_boundary_policies_json_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArnInput">policy_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArnsInput">resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOptionInput">resource_handling_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountIdInput">resource_owner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJsonInput">resource_policy_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNames">action_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJson">additional_policies_json</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArn">caller_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJson">permissions_boundary_policies_json</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArn">policy_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOption">resource_handling_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountId">resource_owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJson">resource_policy_json</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `all_allowed`<sup>Required</sup> <a name="all_allowed" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.allAllowed"></a>

```python
all_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.context"></a>

```python
context: DataAwsIamPrincipalPolicySimulationContextList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList">DataAwsIamPrincipalPolicySimulationContextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.results"></a>

```python
results: DataAwsIamPrincipalPolicySimulationResultsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList">DataAwsIamPrincipalPolicySimulationResultsList</a>

---

##### `action_names_input`<sup>Optional</sup> <a name="action_names_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNamesInput"></a>

```python
action_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_policies_json_input`<sup>Optional</sup> <a name="additional_policies_json_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJsonInput"></a>

```python
additional_policies_json_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `caller_arn_input`<sup>Optional</sup> <a name="caller_arn_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArnInput"></a>

```python
caller_arn_input: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.contextInput"></a>

```python
context_input: typing.Union[IResolvable, typing.List[DataAwsIamPrincipalPolicySimulationContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]

---

##### `permissions_boundary_policies_json_input`<sup>Optional</sup> <a name="permissions_boundary_policies_json_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJsonInput"></a>

```python
permissions_boundary_policies_json_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_source_arn_input`<sup>Optional</sup> <a name="policy_source_arn_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArnInput"></a>

```python
policy_source_arn_input: str
```

- *Type:* str

---

##### `resource_arns_input`<sup>Optional</sup> <a name="resource_arns_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArnsInput"></a>

```python
resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_handling_option_input`<sup>Optional</sup> <a name="resource_handling_option_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOptionInput"></a>

```python
resource_handling_option_input: str
```

- *Type:* str

---

##### `resource_owner_account_id_input`<sup>Optional</sup> <a name="resource_owner_account_id_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountIdInput"></a>

```python
resource_owner_account_id_input: str
```

- *Type:* str

---

##### `resource_policy_json_input`<sup>Optional</sup> <a name="resource_policy_json_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJsonInput"></a>

```python
resource_policy_json_input: str
```

- *Type:* str

---

##### `action_names`<sup>Required</sup> <a name="action_names" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.actionNames"></a>

```python
action_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_policies_json`<sup>Required</sup> <a name="additional_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.additionalPoliciesJson"></a>

```python
additional_policies_json: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `caller_arn`<sup>Required</sup> <a name="caller_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.callerArn"></a>

```python
caller_arn: str
```

- *Type:* str

---

##### `permissions_boundary_policies_json`<sup>Required</sup> <a name="permissions_boundary_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.permissionsBoundaryPoliciesJson"></a>

```python
permissions_boundary_policies_json: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_source_arn`<sup>Required</sup> <a name="policy_source_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.policySourceArn"></a>

```python
policy_source_arn: str
```

- *Type:* str

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_handling_option`<sup>Required</sup> <a name="resource_handling_option" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceHandlingOption"></a>

```python
resource_handling_option: str
```

- *Type:* str

---

##### `resource_owner_account_id`<sup>Required</sup> <a name="resource_owner_account_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourceOwnerAccountId"></a>

```python
resource_owner_account_id: str
```

- *Type:* str

---

##### `resource_policy_json`<sup>Required</sup> <a name="resource_policy_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.resourcePolicyJson"></a>

```python
resource_policy_json: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamPrincipalPolicySimulationConfig <a name="DataAwsIamPrincipalPolicySimulationConfig" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_names: typing.List[str],
  policy_source_arn: str,
  additional_policies_json: typing.List[str] = None,
  caller_arn: str = None,
  context: typing.Union[IResolvable, typing.List[DataAwsIamPrincipalPolicySimulationContext]] = None,
  permissions_boundary_policies_json: typing.List[str] = None,
  resource_arns: typing.List[str] = None,
  resource_handling_option: str = None,
  resource_owner_account_id: str = None,
  resource_policy_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.actionNames">action_names</a></code> | <code>typing.List[str]</code> | One or more names of actions, like "iam:CreateUser", that should be included in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.policySourceArn">policy_source_arn</a></code> | <code>str</code> | ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.additionalPoliciesJson">additional_policies_json</a></code> | <code>typing.List[str]</code> | Additional principal-based policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.callerArn">caller_arn</a></code> | <code>str</code> | ARN of a user to use as the caller of the simulated requests. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.context">context</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]</code> | context block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.permissionsBoundaryPoliciesJson">permissions_boundary_policies_json</a></code> | <code>typing.List[str]</code> | Additional permission boundary policies to use in the simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | ARNs of specific resources to use as the targets of the specified actions during simulation. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceHandlingOption">resource_handling_option</a></code> | <code>str</code> | Specifies the type of simulation to run. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceOwnerAccountId">resource_owner_account_id</a></code> | <code>str</code> | An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourcePolicyJson">resource_policy_json</a></code> | <code>str</code> | A resource policy to associate with all of the target resources for simulation purposes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_names`<sup>Required</sup> <a name="action_names" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.actionNames"></a>

```python
action_names: typing.List[str]
```

- *Type:* typing.List[str]

One or more names of actions, like "iam:CreateUser", that should be included in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}

---

##### `policy_source_arn`<sup>Required</sup> <a name="policy_source_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.policySourceArn"></a>

```python
policy_source_arn: str
```

- *Type:* str

ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}

---

##### `additional_policies_json`<sup>Optional</sup> <a name="additional_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.additionalPoliciesJson"></a>

```python
additional_policies_json: typing.List[str]
```

- *Type:* typing.List[str]

Additional principal-based policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}

---

##### `caller_arn`<sup>Optional</sup> <a name="caller_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.callerArn"></a>

```python
caller_arn: str
```

- *Type:* str

ARN of a user to use as the caller of the simulated requests.

If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.context"></a>

```python
context: typing.Union[IResolvable, typing.List[DataAwsIamPrincipalPolicySimulationContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]

context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}

---

##### `permissions_boundary_policies_json`<sup>Optional</sup> <a name="permissions_boundary_policies_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.permissionsBoundaryPoliciesJson"></a>

```python
permissions_boundary_policies_json: typing.List[str]
```

- *Type:* typing.List[str]

Additional permission boundary policies to use in the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of specific resources to use as the targets of the specified actions during simulation.

If not specified, the simulator assumes "*" which represents general access across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}

---

##### `resource_handling_option`<sup>Optional</sup> <a name="resource_handling_option" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceHandlingOption"></a>

```python
resource_handling_option: str
```

- *Type:* str

Specifies the type of simulation to run.

Some API operations need a particular resource handling option in order to produce a correct reesult.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}

---

##### `resource_owner_account_id`<sup>Optional</sup> <a name="resource_owner_account_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourceOwnerAccountId"></a>

```python
resource_owner_account_id: str
```

- *Type:* str

An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID.

Defaults to the account given as part of caller_arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}

---

##### `resource_policy_json`<sup>Optional</sup> <a name="resource_policy_json" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationConfig.property.resourcePolicyJson"></a>

```python
resource_policy_json: str
```

- *Type:* str

A resource policy to associate with all of the target resources for simulation purposes.

The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}

---

### DataAwsIamPrincipalPolicySimulationContext <a name="DataAwsIamPrincipalPolicySimulationContext" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext(
  key: str,
  type: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.key">key</a></code> | <code>str</code> | The key name of the context entry, such as "aws:CurrentTime". |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.type">type</a></code> | <code>str</code> | The type that the simulator should use to interpret the strings given in argument "values". |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.values">values</a></code> | <code>typing.List[str]</code> | One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the context entry, such as "aws:CurrentTime".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#key DataAwsIamPrincipalPolicySimulation#key}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.type"></a>

```python
type: str
```

- *Type:* str

The type that the simulator should use to interpret the strings given in argument "values".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#type DataAwsIamPrincipalPolicySimulation#type}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/iam_principal_policy_simulation#values DataAwsIamPrincipalPolicySimulation#values}

---

### DataAwsIamPrincipalPolicySimulationResults <a name="DataAwsIamPrincipalPolicySimulationResults" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults()
```


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatements <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatements" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamPrincipalPolicySimulationContextList <a name="DataAwsIamPrincipalPolicySimulationContextList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPrincipalPolicySimulationContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsIamPrincipalPolicySimulationContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]]

---


### DataAwsIamPrincipalPolicySimulationContextOutputReference <a name="DataAwsIamPrincipalPolicySimulationContextOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsIamPrincipalPolicySimulationContext]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationContext">DataAwsIamPrincipalPolicySimulationContext</a>]

---


### DataAwsIamPrincipalPolicySimulationResultsList <a name="DataAwsIamPrincipalPolicySimulationResultsList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPrincipalPolicySimulationResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference <a name="DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyId">source_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyType">source_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements">DataAwsIamPrincipalPolicySimulationResultsMatchedStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_policy_id`<sup>Required</sup> <a name="source_policy_id" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyId"></a>

```python
source_policy_id: str
```

- *Type:* str

---

##### `source_policy_type`<sup>Required</sup> <a name="source_policy_type" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.sourcePolicyType"></a>

```python
source_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIamPrincipalPolicySimulationResultsMatchedStatements
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatements">DataAwsIamPrincipalPolicySimulationResultsMatchedStatements</a>

---


### DataAwsIamPrincipalPolicySimulationResultsOutputReference <a name="DataAwsIamPrincipalPolicySimulationResultsOutputReference" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_principal_policy_simulation

dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.allowed">allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decision">decision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decisionDetails">decision_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.matchedStatements">matched_statements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList">DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.missingContextKeys">missing_context_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults">DataAwsIamPrincipalPolicySimulationResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.allowed"></a>

```python
allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decision"></a>

```python
decision: str
```

- *Type:* str

---

##### `decision_details`<sup>Required</sup> <a name="decision_details" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.decisionDetails"></a>

```python
decision_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `matched_statements`<sup>Required</sup> <a name="matched_statements" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.matchedStatements"></a>

```python
matched_statements: DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList">DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList</a>

---

##### `missing_context_keys`<sup>Required</sup> <a name="missing_context_keys" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.missingContextKeys"></a>

```python
missing_context_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIamPrincipalPolicySimulationResults
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPrincipalPolicySimulation.DataAwsIamPrincipalPolicySimulationResults">DataAwsIamPrincipalPolicySimulationResults</a>

---



