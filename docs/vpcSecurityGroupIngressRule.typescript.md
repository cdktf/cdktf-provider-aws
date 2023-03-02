# `vpcSecurityGroupIngressRule` Submodule <a name="`vpcSecurityGroupIngressRule` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupIngressRule <a name="VpcSecurityGroupIngressRule" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule aws_vpc_security_group_ingress_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer"></a>

```typescript
import { vpcSecurityGroupIngressRule } from '@cdktf/provider-aws'

new vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule(scope: Construct, id: string, config: VpcSecurityGroupIngressRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig">VpcSecurityGroupIngressRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig">VpcSecurityGroupIngressRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv4">resetCidrIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetPrefixListId">resetPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetReferencedSecurityGroupId">resetReferencedSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCidrIpv4` <a name="resetCidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv4"></a>

```typescript
public resetCidrIpv4(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetPrefixListId` <a name="resetPrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetPrefixListId"></a>

```typescript
public resetPrefixListId(): void
```

##### `resetReferencedSecurityGroupId` <a name="resetReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetReferencedSecurityGroupId"></a>

```typescript
public resetReferencedSecurityGroupId(): void
```

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetSecurityGroupId"></a>

```typescript
public resetSecurityGroupId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetToPort"></a>

```typescript
public resetToPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct"></a>

```typescript
import { vpcSecurityGroupIngressRule } from '@cdktf/provider-aws'

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement"></a>

```typescript
import { vpcSecurityGroupIngressRule } from '@cdktf/provider-aws'

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource"></a>

```typescript
import { vpcSecurityGroupIngressRule } from '@cdktf/provider-aws'

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupRuleId">securityGroupRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4Input">cidrIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListIdInput">prefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupIdInput">referencedSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4">cidrIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupId">referencedSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroupRuleId`<sup>Required</sup> <a name="securityGroupRuleId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupRuleId"></a>

```typescript
public readonly securityGroupRuleId: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `cidrIpv4Input`<sup>Optional</sup> <a name="cidrIpv4Input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4Input"></a>

```typescript
public readonly cidrIpv4Input: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListIdInput"></a>

```typescript
public readonly prefixListIdInput: string;
```

- *Type:* string

---

##### `referencedSecurityGroupIdInput`<sup>Optional</sup> <a name="referencedSecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupIdInput"></a>

```typescript
public readonly referencedSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrIpv4`<sup>Required</sup> <a name="cidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4"></a>

```typescript
public readonly cidrIpv4: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---

##### `referencedSecurityGroupId`<sup>Required</sup> <a name="referencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupId"></a>

```typescript
public readonly referencedSecurityGroupId: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupIngressRuleConfig <a name="VpcSecurityGroupIngressRuleConfig" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.Initializer"></a>

```typescript
import { vpcSecurityGroupIngressRule } from '@cdktf/provider-aws'

const vpcSecurityGroupIngressRuleConfig: vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv4">cidrIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.prefixListId">prefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.referencedSecurityGroupId">referencedSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}.

---

##### `cidrIpv4`<sup>Optional</sup> <a name="cidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv4"></a>

```typescript
public readonly cidrIpv4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}.

---

##### `prefixListId`<sup>Optional</sup> <a name="prefixListId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}.

---

##### `referencedSecurityGroupId`<sup>Optional</sup> <a name="referencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.referencedSecurityGroupId"></a>

```typescript
public readonly referencedSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}.

---



