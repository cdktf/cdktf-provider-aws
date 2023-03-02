# `route53RecoverycontrolconfigSafetyRule` Submodule <a name="`route53RecoverycontrolconfigSafetyRule` Submodule" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigSafetyRule <a name="Route53RecoverycontrolconfigSafetyRule" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

new route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule(scope: Construct, id: string, config: Route53RecoverycontrolconfigSafetyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig">Route53RecoverycontrolconfigSafetyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig">Route53RecoverycontrolconfigSafetyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig">putRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetAssertedControls">resetAssertedControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetGatingControls">resetGatingControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTargetControls">resetTargetControls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRuleConfig` <a name="putRuleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig"></a>

```typescript
public putRuleConfig(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---

##### `resetAssertedControls` <a name="resetAssertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetAssertedControls"></a>

```typescript
public resetAssertedControls(): void
```

##### `resetGatingControls` <a name="resetGatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetGatingControls"></a>

```typescript
public resetGatingControls(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetControls` <a name="resetTargetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTargetControls"></a>

```typescript
public resetTargetControls(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControlsInput">assertedControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArnInput">controlPanelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControlsInput">gatingControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfigInput">ruleConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControlsInput">targetControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMsInput">waitPeriodMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControls">assertedControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControls">gatingControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControls">targetControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfig"></a>

```typescript
public readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `assertedControlsInput`<sup>Optional</sup> <a name="assertedControlsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControlsInput"></a>

```typescript
public readonly assertedControlsInput: string[];
```

- *Type:* string[]

---

##### `controlPanelArnInput`<sup>Optional</sup> <a name="controlPanelArnInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArnInput"></a>

```typescript
public readonly controlPanelArnInput: string;
```

- *Type:* string

---

##### `gatingControlsInput`<sup>Optional</sup> <a name="gatingControlsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControlsInput"></a>

```typescript
public readonly gatingControlsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleConfigInput`<sup>Optional</sup> <a name="ruleConfigInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfigInput"></a>

```typescript
public readonly ruleConfigInput: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---

##### `targetControlsInput`<sup>Optional</sup> <a name="targetControlsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControlsInput"></a>

```typescript
public readonly targetControlsInput: string[];
```

- *Type:* string[]

---

##### `waitPeriodMsInput`<sup>Optional</sup> <a name="waitPeriodMsInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMsInput"></a>

```typescript
public readonly waitPeriodMsInput: number;
```

- *Type:* number

---

##### `assertedControls`<sup>Required</sup> <a name="assertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControls"></a>

```typescript
public readonly assertedControls: string[];
```

- *Type:* string[]

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

---

##### `gatingControls`<sup>Required</sup> <a name="gatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControls"></a>

```typescript
public readonly gatingControls: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetControls`<sup>Required</sup> <a name="targetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControls"></a>

```typescript
public readonly targetControls: string[];
```

- *Type:* string[]

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigSafetyRuleConfig <a name="Route53RecoverycontrolconfigSafetyRuleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

const route53RecoverycontrolconfigSafetyRuleConfig: route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | rule_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.assertedControls">assertedControls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.gatingControls">gatingControls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.targetControls">targetControls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}.

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.ruleConfig"></a>

```typescript
public readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

rule_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}.

---

##### `assertedControls`<sup>Optional</sup> <a name="assertedControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.assertedControls"></a>

```typescript
public readonly assertedControls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}.

---

##### `gatingControls`<sup>Optional</sup> <a name="gatingControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.gatingControls"></a>

```typescript
public readonly gatingControls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetControls`<sup>Optional</sup> <a name="targetControls" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.targetControls"></a>

```typescript
public readonly targetControls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}.

---

### Route53RecoverycontrolconfigSafetyRuleRuleConfig <a name="Route53RecoverycontrolconfigSafetyRuleRuleConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

const route53RecoverycontrolconfigSafetyRuleRuleConfig: route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.inverted">inverted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}. |

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.inverted"></a>

```typescript
public readonly inverted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigSafetyRule } from '@cdktf/provider-aws'

new route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.invertedInput">invertedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invertedInput`<sup>Optional</sup> <a name="invertedInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```typescript
public readonly invertedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```typescript
public readonly inverted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---



