# `securityGroup` Submodule <a name="`securityGroup` Submodule" id="@cdktf/provider-aws.securityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroup <a name="SecurityGroup" id="@cdktf/provider-aws.securityGroup.SecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group aws_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

new securityGroup.SecurityGroup(scope: Construct, id: string, config?: SecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig">SecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig">SecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete">resetRevokeRulesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress"></a>

```typescript
public putEgress(value: IResolvable | SecurityGroupEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress"></a>

```typescript
public putIngress(value: IResolvable | SecurityGroupIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetRevokeRulesOnDelete` <a name="resetRevokeRulesOnDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete"></a>

```typescript
public resetRevokeRulesOnDelete(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

securityGroup.SecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

securityGroup.SecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

securityGroup.SecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput">revokeRulesOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.egress"></a>

```typescript
public readonly egress: SecurityGroupEgressList;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingress"></a>

```typescript
public readonly ingress: SecurityGroupIngressList;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | SecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | SecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `revokeRulesOnDeleteInput`<sup>Optional</sup> <a name="revokeRulesOnDeleteInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput"></a>

```typescript
public readonly revokeRulesOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SecurityGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a> | cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `revokeRulesOnDelete`<sup>Required</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete"></a>

```typescript
public readonly revokeRulesOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupConfig <a name="SecurityGroupConfig" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

const securityGroupConfig: securityGroup.SecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.egress">egress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.egress"></a>

```typescript
public readonly egress: IResolvable | SecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | SecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `revokeRulesOnDelete`<sup>Optional</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete"></a>

```typescript
public readonly revokeRulesOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#timeouts SecurityGroup#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}.

---

### SecurityGroupEgress <a name="SecurityGroupEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

const securityGroupEgress: securityGroup.SecurityGroupEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupIngress <a name="SecurityGroupIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

const securityGroupIngress: securityGroup.SecurityGroupIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupTimeouts <a name="SecurityGroupTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

const securityGroupTimeouts: securityGroup.SecurityGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityGroupEgressList <a name="SecurityGroupEgressList" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

new securityGroup.SecurityGroupEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get"></a>

```typescript
public get(index: number): SecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

---


### SecurityGroupEgressOutputReference <a name="SecurityGroupEgressOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

new securityGroup.SecurityGroupEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```typescript
public resetIpv6CidrBlocks(): void
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```typescript
public resetSelfAttribute(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```typescript
public readonly ipv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```typescript
public readonly selfAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityGroupEgress | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a> | cdktf.IResolvable

---


### SecurityGroupIngressList <a name="SecurityGroupIngressList" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

new securityGroup.SecurityGroupIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get"></a>

```typescript
public get(index: number): SecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

---


### SecurityGroupIngressOutputReference <a name="SecurityGroupIngressOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

new securityGroup.SecurityGroupIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```typescript
public resetIpv6CidrBlocks(): void
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```typescript
public resetSelfAttribute(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```typescript
public readonly ipv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```typescript
public readonly selfAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityGroupIngress | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a> | cdktf.IResolvable

---


### SecurityGroupTimeoutsOutputReference <a name="SecurityGroupTimeoutsOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityGroup } from '@cdktf/provider-aws'

new securityGroup.SecurityGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a> | cdktf.IResolvable

---



