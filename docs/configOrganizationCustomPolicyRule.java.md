# `configOrganizationCustomPolicyRule` Submodule <a name="`configOrganizationCustomPolicyRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomPolicyRule <a name="ConfigOrganizationCustomPolicyRule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .policyRuntime(java.lang.String)
    .policyText(java.lang.String)
    .triggerTypes(java.util.List<java.lang.String>)
//  .debugLogDeliveryAccounts(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
//  .timeouts(ConfigOrganizationCustomPolicyRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyText">policyText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyRuntime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.policyText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.triggerTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.debugLogDeliveryAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.inputParameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceIdScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.resourceTypesScope"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagKeyScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.tagValueScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts">resetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts"></a>

```java
public void putTimeouts(ConfigOrganizationCustomPolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `resetDebugLogDeliveryAccounts` <a name="resetDebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts"></a>

```java
public void resetDebugLogDeliveryAccounts()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts"></a>

```java
public void resetExcludedAccounts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope"></a>

```java
public void resetResourceIdScope()
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope"></a>

```java
public void resetResourceTypesScope()
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope"></a>

```java
public void resetTagKeyScope()
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope"></a>

```java
public void resetTagValueScope()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRule;

ConfigOrganizationCustomPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigOrganizationCustomPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigOrganizationCustomPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigOrganizationCustomPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationCustomPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput">debugLogDeliveryAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput">policyRuntimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput">policyTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput">triggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText">policyText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts"></a>

```java
public ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a>

---

##### `debugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="debugLogDeliveryAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyRuntimeInput`<sup>Optional</sup> <a name="policyRuntimeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput"></a>

```java
public java.lang.String getPolicyRuntimeInput();
```

- *Type:* java.lang.String

---

##### `policyTextInput`<sup>Optional</sup> <a name="policyTextInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput"></a>

```java
public java.lang.String getPolicyTextInput();
```

- *Type:* java.lang.String

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput"></a>

```java
public java.lang.String getResourceIdScopeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput"></a>

```java
public java.lang.String getTagKeyScopeInput();
```

- *Type:* java.lang.String

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput"></a>

```java
public java.lang.String getTagValueScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `debugLogDeliveryAccounts`<sup>Required</sup> <a name="debugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime"></a>

```java
public java.lang.String getPolicyRuntime();
```

- *Type:* java.lang.String

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomPolicyRuleConfig <a name="ConfigOrganizationCustomPolicyRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRuleConfig;

ConfigOrganizationCustomPolicyRuleConfig.builder()
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
    .name(java.lang.String)
    .policyRuntime(java.lang.String)
    .policyText(java.lang.String)
    .triggerTypes(java.util.List<java.lang.String>)
//  .debugLogDeliveryAccounts(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
//  .timeouts(ConfigOrganizationCustomPolicyRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText">policyText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime"></a>

```java
public java.lang.String getPolicyRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts"></a>

```java
public ConfigOrganizationCustomPolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

### ConfigOrganizationCustomPolicyRuleTimeouts <a name="ConfigOrganizationCustomPolicyRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRuleTimeouts;

ConfigOrganizationCustomPolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.config_organization_custom_policy_rule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference;

new ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---



