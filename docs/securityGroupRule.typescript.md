# `securityGroupRule` Submodule <a name="`securityGroupRule` Submodule" id="@cdktf/provider-aws.securityGroupRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroupRule <a name="SecurityGroupRule" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule aws_security_group_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

new securityGroupRule.SecurityGroupRule(scope: Construct, id: string, config: SecurityGroupRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig">SecurityGroupRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig">SecurityGroupRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSourceSecurityGroupId">resetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityGroupRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a>

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetIpv6CidrBlocks"></a>

```typescript
public resetIpv6CidrBlocks(): void
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSelfAttribute"></a>

```typescript
public resetSelfAttribute(): void
```

##### `resetSourceSecurityGroupId` <a name="resetSourceSecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSourceSecurityGroupId"></a>

```typescript
public resetSourceSecurityGroupId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isConstruct"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

securityGroupRule.SecurityGroupRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformElement"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

securityGroupRule.SecurityGroupRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformResource"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

securityGroupRule.SecurityGroupRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupRuleId">securityGroupRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference">SecurityGroupRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttributeInput">selfAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupIdInput">sourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityGroupRuleId`<sup>Required</sup> <a name="securityGroupRuleId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupRuleId"></a>

```typescript
public readonly securityGroupRuleId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityGroupRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference">SecurityGroupRuleTimeoutsOutputReference</a>

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocksInput"></a>

```typescript
public readonly ipv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttributeInput"></a>

```typescript
public readonly selfAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceSecurityGroupIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupIdInput"></a>

```typescript
public readonly sourceSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SecurityGroupRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a> | cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupRuleConfig <a name="SecurityGroupRuleConfig" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.Initializer"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

const securityGroupRuleConfig: securityGroupRule.SecurityGroupRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#from_port SecurityGroupRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#protocol SecurityGroupRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#security_group_id SecurityGroupRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#to_port SecurityGroupRule#to_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#type SecurityGroupRule#type}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#description SecurityGroupRule#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#id SecurityGroupRule#id}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#self SecurityGroupRule#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#from_port SecurityGroupRule#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#protocol SecurityGroupRule#protocol}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#security_group_id SecurityGroupRule#security_group_id}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#to_port SecurityGroupRule#to_port}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#type SecurityGroupRule#type}.

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#description SecurityGroupRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#id SecurityGroupRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#self SecurityGroupRule#self}.

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityGroupRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#timeouts SecurityGroupRule#timeouts}

---

### SecurityGroupRuleTimeouts <a name="SecurityGroupRuleTimeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts.Initializer"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

const securityGroupRuleTimeouts: securityGroupRule.SecurityGroupRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#create SecurityGroupRule#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#create SecurityGroupRule#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityGroupRuleTimeoutsOutputReference <a name="SecurityGroupRuleTimeoutsOutputReference" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityGroupRule } from '@cdktf/provider-aws'

new securityGroupRule.SecurityGroupRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityGroupRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a> | cdktf.IResolvable

---



