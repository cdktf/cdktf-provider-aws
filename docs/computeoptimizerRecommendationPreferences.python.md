# `computeoptimizerRecommendationPreferences` Submodule <a name="`computeoptimizerRecommendationPreferences` Submodule" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerRecommendationPreferences <a name="ComputeoptimizerRecommendationPreferences" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_type: str,
  enhanced_infrastructure_metrics: str = None,
  external_metrics_preference: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]] = None,
  inferred_workload_types: str = None,
  look_back_period: str = None,
  preferred_resource: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesPreferredResource]] = None,
  savings_estimation_mode: str = None,
  scope: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesScope]] = None,
  utilization_preference: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreference]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.enhancedInfrastructureMetrics">enhanced_infrastructure_metrics</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.externalMetricsPreference">external_metrics_preference</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]</code> | external_metrics_preference block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.inferredWorkloadTypes">inferred_workload_types</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.lookBackPeriod">look_back_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.preferredResource">preferred_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]</code> | preferred_resource block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.savingsEstimationMode">savings_estimation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.utilizationPreference">utilization_preference</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]</code> | utilization_preference block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}.

---

##### `enhanced_infrastructure_metrics`<sup>Optional</sup> <a name="enhanced_infrastructure_metrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.enhancedInfrastructureMetrics"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}.

---

##### `external_metrics_preference`<sup>Optional</sup> <a name="external_metrics_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.externalMetricsPreference"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]

external_metrics_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference ComputeoptimizerRecommendationPreferences#external_metrics_preference}

---

##### `inferred_workload_types`<sup>Optional</sup> <a name="inferred_workload_types" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.inferredWorkloadTypes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}.

---

##### `look_back_period`<sup>Optional</sup> <a name="look_back_period" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.lookBackPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}.

---

##### `preferred_resource`<sup>Optional</sup> <a name="preferred_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.preferredResource"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]

preferred_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource ComputeoptimizerRecommendationPreferences#preferred_resource}

---

##### `savings_estimation_mode`<sup>Optional</sup> <a name="savings_estimation_mode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.savingsEstimationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#scope ComputeoptimizerRecommendationPreferences#scope}

---

##### `utilization_preference`<sup>Optional</sup> <a name="utilization_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.utilizationPreference"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]

utilization_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference ComputeoptimizerRecommendationPreferences#utilization_preference}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference">put_external_metrics_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource">put_preferred_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference">put_utilization_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetEnhancedInfrastructureMetrics">reset_enhanced_infrastructure_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetExternalMetricsPreference">reset_external_metrics_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetInferredWorkloadTypes">reset_inferred_workload_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetLookBackPeriod">reset_look_back_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetPreferredResource">reset_preferred_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetSavingsEstimationMode">reset_savings_estimation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetUtilizationPreference">reset_utilization_preference</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_metrics_preference` <a name="put_external_metrics_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference"></a>

```python
def put_external_metrics_preference(
  value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]

---

##### `put_preferred_resource` <a name="put_preferred_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource"></a>

```python
def put_preferred_resource(
  value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesPreferredResource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope"></a>

```python
def put_scope(
  value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]

---

##### `put_utilization_preference` <a name="put_utilization_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference"></a>

```python
def put_utilization_preference(
  value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreference]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]

---

##### `reset_enhanced_infrastructure_metrics` <a name="reset_enhanced_infrastructure_metrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetEnhancedInfrastructureMetrics"></a>

```python
def reset_enhanced_infrastructure_metrics() -> None
```

##### `reset_external_metrics_preference` <a name="reset_external_metrics_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetExternalMetricsPreference"></a>

```python
def reset_external_metrics_preference() -> None
```

##### `reset_inferred_workload_types` <a name="reset_inferred_workload_types" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetInferredWorkloadTypes"></a>

```python
def reset_inferred_workload_types() -> None
```

##### `reset_look_back_period` <a name="reset_look_back_period" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetLookBackPeriod"></a>

```python
def reset_look_back_period() -> None
```

##### `reset_preferred_resource` <a name="reset_preferred_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetPreferredResource"></a>

```python
def reset_preferred_resource() -> None
```

##### `reset_savings_estimation_mode` <a name="reset_savings_estimation_mode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetSavingsEstimationMode"></a>

```python
def reset_savings_estimation_mode() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_utilization_preference` <a name="reset_utilization_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetUtilizationPreference"></a>

```python
def reset_utilization_preference() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeoptimizerRecommendationPreferences to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeoptimizerRecommendationPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerRecommendationPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreference">external_metrics_preference</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList">ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResource">preferred_resource</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList">ComputeoptimizerRecommendationPreferencesPreferredResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList">ComputeoptimizerRecommendationPreferencesScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreference">utilization_preference</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetricsInput">enhanced_infrastructure_metrics_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreferenceInput">external_metrics_preference_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypesInput">inferred_workload_types_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriodInput">look_back_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResourceInput">preferred_resource_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationModeInput">savings_estimation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreferenceInput">utilization_preference_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetrics">enhanced_infrastructure_metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypes">inferred_workload_types</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriod">look_back_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationMode">savings_estimation_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_metrics_preference`<sup>Required</sup> <a name="external_metrics_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreference"></a>

```python
external_metrics_preference: ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList">ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `preferred_resource`<sup>Required</sup> <a name="preferred_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResource"></a>

```python
preferred_resource: ComputeoptimizerRecommendationPreferencesPreferredResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList">ComputeoptimizerRecommendationPreferencesPreferredResourceList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scope"></a>

```python
scope: ComputeoptimizerRecommendationPreferencesScopeList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList">ComputeoptimizerRecommendationPreferencesScopeList</a>

---

##### `utilization_preference`<sup>Required</sup> <a name="utilization_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreference"></a>

```python
utilization_preference: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList</a>

---

##### `enhanced_infrastructure_metrics_input`<sup>Optional</sup> <a name="enhanced_infrastructure_metrics_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetricsInput"></a>

```python
enhanced_infrastructure_metrics_input: str
```

- *Type:* str

---

##### `external_metrics_preference_input`<sup>Optional</sup> <a name="external_metrics_preference_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreferenceInput"></a>

```python
external_metrics_preference_input: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]

---

##### `inferred_workload_types_input`<sup>Optional</sup> <a name="inferred_workload_types_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypesInput"></a>

```python
inferred_workload_types_input: str
```

- *Type:* str

---

##### `look_back_period_input`<sup>Optional</sup> <a name="look_back_period_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriodInput"></a>

```python
look_back_period_input: str
```

- *Type:* str

---

##### `preferred_resource_input`<sup>Optional</sup> <a name="preferred_resource_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResourceInput"></a>

```python
preferred_resource_input: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesPreferredResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `savings_estimation_mode_input`<sup>Optional</sup> <a name="savings_estimation_mode_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationModeInput"></a>

```python
savings_estimation_mode_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]

---

##### `utilization_preference_input`<sup>Optional</sup> <a name="utilization_preference_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreferenceInput"></a>

```python
utilization_preference_input: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]

---

##### `enhanced_infrastructure_metrics`<sup>Required</sup> <a name="enhanced_infrastructure_metrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetrics"></a>

```python
enhanced_infrastructure_metrics: str
```

- *Type:* str

---

##### `inferred_workload_types`<sup>Required</sup> <a name="inferred_workload_types" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypes"></a>

```python
inferred_workload_types: str
```

- *Type:* str

---

##### `look_back_period`<sup>Required</sup> <a name="look_back_period" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriod"></a>

```python
look_back_period: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `savings_estimation_mode`<sup>Required</sup> <a name="savings_estimation_mode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationMode"></a>

```python
savings_estimation_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerRecommendationPreferencesConfig <a name="ComputeoptimizerRecommendationPreferencesConfig" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_type: str,
  enhanced_infrastructure_metrics: str = None,
  external_metrics_preference: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]] = None,
  inferred_workload_types: str = None,
  look_back_period: str = None,
  preferred_resource: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesPreferredResource]] = None,
  savings_estimation_mode: str = None,
  scope: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesScope]] = None,
  utilization_preference: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreference]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.enhancedInfrastructureMetrics">enhanced_infrastructure_metrics</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.externalMetricsPreference">external_metrics_preference</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]</code> | external_metrics_preference block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.inferredWorkloadTypes">inferred_workload_types</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lookBackPeriod">look_back_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.preferredResource">preferred_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]</code> | preferred_resource block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.savingsEstimationMode">savings_estimation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.utilizationPreference">utilization_preference</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]</code> | utilization_preference block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}.

---

##### `enhanced_infrastructure_metrics`<sup>Optional</sup> <a name="enhanced_infrastructure_metrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.enhancedInfrastructureMetrics"></a>

```python
enhanced_infrastructure_metrics: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}.

---

##### `external_metrics_preference`<sup>Optional</sup> <a name="external_metrics_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.externalMetricsPreference"></a>

```python
external_metrics_preference: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]

external_metrics_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference ComputeoptimizerRecommendationPreferences#external_metrics_preference}

---

##### `inferred_workload_types`<sup>Optional</sup> <a name="inferred_workload_types" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.inferredWorkloadTypes"></a>

```python
inferred_workload_types: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}.

---

##### `look_back_period`<sup>Optional</sup> <a name="look_back_period" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lookBackPeriod"></a>

```python
look_back_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}.

---

##### `preferred_resource`<sup>Optional</sup> <a name="preferred_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.preferredResource"></a>

```python
preferred_resource: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesPreferredResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]

preferred_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource ComputeoptimizerRecommendationPreferences#preferred_resource}

---

##### `savings_estimation_mode`<sup>Optional</sup> <a name="savings_estimation_mode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.savingsEstimationMode"></a>

```python
savings_estimation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.scope"></a>

```python
scope: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#scope ComputeoptimizerRecommendationPreferences#scope}

---

##### `utilization_preference`<sup>Optional</sup> <a name="utilization_preference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.utilizationPreference"></a>

```python
utilization_preference: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]

utilization_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference ComputeoptimizerRecommendationPreferences#utilization_preference}

---

### ComputeoptimizerRecommendationPreferencesExternalMetricsPreference <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference(
  source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}.

---

### ComputeoptimizerRecommendationPreferencesPreferredResource <a name="ComputeoptimizerRecommendationPreferencesPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource(
  name: str,
  exclude_list: typing.List[str] = None,
  include_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.excludeList">exclude_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.includeList">include_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}.

---

##### `exclude_list`<sup>Optional</sup> <a name="exclude_list" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.excludeList"></a>

```python
exclude_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}.

---

##### `include_list`<sup>Optional</sup> <a name="include_list" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.includeList"></a>

```python
include_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}.

---

### ComputeoptimizerRecommendationPreferencesScope <a name="ComputeoptimizerRecommendationPreferencesScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}.

---

### ComputeoptimizerRecommendationPreferencesUtilizationPreference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference(
  metric_name: str,
  metric_parameters: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricParameters">metric_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]</code> | metric_parameters block. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}.

---

##### `metric_parameters`<sup>Optional</sup> <a name="metric_parameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricParameters"></a>

```python
metric_parameters: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]

metric_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#metric_parameters ComputeoptimizerRecommendationPreferences#metric_parameters}

---

### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters(
  headroom: str,
  threshold: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.headroom">headroom</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.threshold">threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}. |

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.headroom"></a>

```python
headroom: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]]

---


### ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeoptimizerRecommendationPreferencesExternalMetricsPreference]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference">ComputeoptimizerRecommendationPreferencesExternalMetricsPreference</a>]

---


### ComputeoptimizerRecommendationPreferencesPreferredResourceList <a name="ComputeoptimizerRecommendationPreferencesPreferredResourceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesPreferredResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]]

---


### ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference <a name="ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetExcludeList">reset_exclude_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetIncludeList">reset_include_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_list` <a name="reset_exclude_list" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetExcludeList"></a>

```python
def reset_exclude_list() -> None
```

##### `reset_include_list` <a name="reset_include_list" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetIncludeList"></a>

```python
def reset_include_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeListInput">exclude_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeListInput">include_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeList">exclude_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeList">include_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_list_input`<sup>Optional</sup> <a name="exclude_list_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeListInput"></a>

```python
exclude_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_list_input`<sup>Optional</sup> <a name="include_list_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeListInput"></a>

```python
include_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `exclude_list`<sup>Required</sup> <a name="exclude_list" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeList"></a>

```python
exclude_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_list`<sup>Required</sup> <a name="include_list" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeList"></a>

```python
include_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeoptimizerRecommendationPreferencesPreferredResource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource">ComputeoptimizerRecommendationPreferencesPreferredResource</a>]

---


### ComputeoptimizerRecommendationPreferencesScopeList <a name="ComputeoptimizerRecommendationPreferencesScopeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerRecommendationPreferencesScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]]

---


### ComputeoptimizerRecommendationPreferencesScopeOutputReference <a name="ComputeoptimizerRecommendationPreferencesScopeOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeoptimizerRecommendationPreferencesScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope">ComputeoptimizerRecommendationPreferencesScope</a>]

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreference]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]]

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroomInput">headroom_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroom">headroom</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headroom_input`<sup>Optional</sup> <a name="headroom_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroomInput"></a>

```python
headroom_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroom"></a>

```python
headroom: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_recommendation_preferences

computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters">put_metric_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resetMetricParameters">reset_metric_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_parameters` <a name="put_metric_parameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters"></a>

```python
def put_metric_parameters(
  value: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]

---

##### `reset_metric_parameters` <a name="reset_metric_parameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resetMetricParameters"></a>

```python
def reset_metric_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParameters">metric_parameters</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParametersInput">metric_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_parameters`<sup>Required</sup> <a name="metric_parameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParameters"></a>

```python
metric_parameters: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList</a>

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_parameters_input`<sup>Optional</sup> <a name="metric_parameters_input" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParametersInput"></a>

```python
metric_parameters_input: typing.Union[IResolvable, typing.List[ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters</a>]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeoptimizerRecommendationPreferencesUtilizationPreference]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference">ComputeoptimizerRecommendationPreferencesUtilizationPreference</a>]

---



