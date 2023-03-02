# `configOrganizationCustomRule` Submodule <a name="`configOrganizationCustomRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomRule <a name="ConfigOrganizationCustomRule" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule aws_config_organization_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

new configOrganizationCustomRule.ConfigOrganizationCustomRule(scope: Construct, id: string, config: ConfigOrganizationCustomRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig">ConfigOrganizationCustomRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig">ConfigOrganizationCustomRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ConfigOrganizationCustomRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts"></a>

```typescript
public resetExcludedAccounts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters"></a>

```typescript
public resetInputParameters(): void
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency"></a>

```typescript
public resetMaximumExecutionFrequency(): void
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope"></a>

```typescript
public resetResourceIdScope(): void
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope"></a>

```typescript
public resetResourceTypesScope(): void
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope"></a>

```typescript
public resetTagKeyScope(): void
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope"></a>

```typescript
public resetTagValueScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput">inputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput">triggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters">inputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes">triggerTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationCustomRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput"></a>

```typescript
public readonly excludedAccountsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput"></a>

```typescript
public readonly inputParametersInput: string;
```

- *Type:* string

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput"></a>

```typescript
public readonly lambdaFunctionArnInput: string;
```

- *Type:* string

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput"></a>

```typescript
public readonly maximumExecutionFrequencyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput"></a>

```typescript
public readonly resourceIdScopeInput: string;
```

- *Type:* string

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput"></a>

```typescript
public readonly resourceTypesScopeInput: string[];
```

- *Type:* string[]

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput"></a>

```typescript
public readonly tagKeyScopeInput: string;
```

- *Type:* string

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput"></a>

```typescript
public readonly tagValueScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ConfigOrganizationCustomRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> | cdktf.IResolvable

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput"></a>

```typescript
public readonly triggerTypesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes"></a>

```typescript
public readonly triggerTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomRuleConfig <a name="ConfigOrganizationCustomRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.Initializer"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

const configOrganizationCustomRuleConfig: configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes">triggerTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters">inputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes"></a>

```typescript
public readonly triggerTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationCustomRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}

---

### ConfigOrganizationCustomRuleTimeouts <a name="ConfigOrganizationCustomRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.Initializer"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

const configOrganizationCustomRuleTimeouts: configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { configOrganizationCustomRule } from '@cdktf/provider-aws'

new configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigOrganizationCustomRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a> | cdktf.IResolvable

---



