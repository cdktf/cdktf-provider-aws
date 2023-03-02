# `ec2TrafficMirrorFilterRule` Submodule <a name="`ec2TrafficMirrorFilterRule` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorFilterRule <a name="Ec2TrafficMirrorFilterRule" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule aws_ec2_traffic_mirror_filter_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

new ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule(scope: Construct, id: string, config: Ec2TrafficMirrorFilterRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig">Ec2TrafficMirrorFilterRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig">Ec2TrafficMirrorFilterRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: Ec2TrafficMirrorFilterRuleDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: Ec2TrafficMirrorFilterRuleSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput">destinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput">ruleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput">ruleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput">sourceCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput">trafficDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput">trafficMirrorFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection">trafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationCidrBlockInput`<sup>Optional</sup> <a name="destinationCidrBlockInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput"></a>

```typescript
public readonly destinationCidrBlockInput: string;
```

- *Type:* string

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: Ec2TrafficMirrorFilterRuleDestinationPortRange;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput"></a>

```typescript
public readonly ruleActionInput: string;
```

- *Type:* string

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput"></a>

```typescript
public readonly ruleNumberInput: number;
```

- *Type:* number

---

##### `sourceCidrBlockInput`<sup>Optional</sup> <a name="sourceCidrBlockInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput"></a>

```typescript
public readonly sourceCidrBlockInput: string;
```

- *Type:* string

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: Ec2TrafficMirrorFilterRuleSourcePortRange;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `trafficDirectionInput`<sup>Optional</sup> <a name="trafficDirectionInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput"></a>

```typescript
public readonly trafficDirectionInput: string;
```

- *Type:* string

---

##### `trafficMirrorFilterIdInput`<sup>Optional</sup> <a name="trafficMirrorFilterIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput"></a>

```typescript
public readonly trafficMirrorFilterIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection"></a>

```typescript
public readonly trafficDirection: string;
```

- *Type:* string

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId"></a>

```typescript
public readonly trafficMirrorFilterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorFilterRuleConfig <a name="Ec2TrafficMirrorFilterRuleConfig" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.Initializer"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

const ec2TrafficMirrorFilterRuleConfig: ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction">ruleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection">trafficDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | source_port_range block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}.

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}.

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}.

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}.

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection"></a>

```typescript
public readonly trafficDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}.

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId"></a>

```typescript
public readonly trafficMirrorFilterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}.

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: Ec2TrafficMirrorFilterRuleDestinationPortRange;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: Ec2TrafficMirrorFilterRuleSourcePortRange;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}

---

### Ec2TrafficMirrorFilterRuleDestinationPortRange <a name="Ec2TrafficMirrorFilterRuleDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.Initializer"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

const ec2TrafficMirrorFilterRuleDestinationPortRange: ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

### Ec2TrafficMirrorFilterRuleSourcePortRange <a name="Ec2TrafficMirrorFilterRuleSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.Initializer"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

const ec2TrafficMirrorFilterRuleSourcePortRange: ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

new ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2TrafficMirrorFilterRuleDestinationPortRange;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---


### Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { ec2TrafficMirrorFilterRule } from '@cdktf/provider-aws'

new ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2TrafficMirrorFilterRuleSourcePortRange;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---



