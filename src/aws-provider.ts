// https://www.terraform.io/docs/providers/aws/r/aws_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsProviderConfig {
  /** The access key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console. */
  readonly accessKey?: string;
  readonly allowedAccountIds?: string[];
  readonly forbiddenAccountIds?: string[];
  /** Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false` */
  readonly insecure?: boolean;
  /** The maximum number of times an AWS API request is
being executed. If the API request still fails, an error is
thrown. */
  readonly maxRetries?: number;
  /** The profile for API operations. If not set, the default profile
created with `aws configure` will be used. */
  readonly profile?: string;
  /** The region where AWS operations will take place. Examples
are us-east-1, us-west-2, etc. */
  readonly region: string;
  /** Set this to true to force the request to use path-style addressing,
i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
use virtual hosted bucket addressing when possible
(http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. */
  readonly s3ForcePathStyle?: boolean;
  /** The secret key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console. */
  readonly secretKey?: string;
  /** The path to the shared credentials file. If not set
this defaults to ~/.aws/credentials. */
  readonly sharedCredentialsFile?: string;
  /** Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. */
  readonly skipCredentialsValidation?: boolean;
  /** Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. */
  readonly skipGetEc2Platforms?: boolean;
  readonly skipMetadataApiCheck?: boolean;
  /** Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet). */
  readonly skipRegionValidation?: boolean;
  /** Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. */
  readonly skipRequestingAccountId?: boolean;
  /** session token. A session token is only required if you are
using temporary security credentials. */
  readonly token?: string;
  /** Alias name */
  readonly alias?: string;
  /** assume_role block */
  readonly assumeRole?: AwsProviderAssumeRole[];
  /** endpoints block */
  readonly endpoints?: AwsProviderEndpoints[];
  /** ignore_tags block */
  readonly ignoreTags?: AwsProviderIgnoreTags[];
}
export interface AwsProviderAssumeRole {
  /** Seconds to restrict the assume role session duration. */
  readonly durationSeconds?: number;
  /** Unique identifier that might be required for assuming a role in another account. */
  readonly externalId?: string;
  /** IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. */
  readonly policy?: string;
  /** Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. */
  readonly policyArns?: string[];
  /** Amazon Resource Name of an IAM Role to assume prior to making API calls. */
  readonly roleArn?: string;
  /** Identifier for the assumed role session. */
  readonly sessionName?: string;
  /** Assume role session tags. */
  readonly tags?: { [key: string]: string };
  /** Assume role session tag keys to pass to any subsequent sessions. */
  readonly transitiveTagKeys?: string[];
}

function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transitiveTagKeys),
  }
}

export interface AwsProviderEndpoints {
  /** Use this to override the default service endpoint URL */
  readonly accessanalyzer?: string;
  /** Use this to override the default service endpoint URL */
  readonly acm?: string;
  /** Use this to override the default service endpoint URL */
  readonly acmpca?: string;
  /** Use this to override the default service endpoint URL */
  readonly amplify?: string;
  /** Use this to override the default service endpoint URL */
  readonly apigateway?: string;
  /** Use this to override the default service endpoint URL */
  readonly applicationautoscaling?: string;
  /** Use this to override the default service endpoint URL */
  readonly applicationinsights?: string;
  /** Use this to override the default service endpoint URL */
  readonly appmesh?: string;
  /** Use this to override the default service endpoint URL */
  readonly appstream?: string;
  /** Use this to override the default service endpoint URL */
  readonly appsync?: string;
  /** Use this to override the default service endpoint URL */
  readonly athena?: string;
  /** Use this to override the default service endpoint URL */
  readonly autoscaling?: string;
  /** Use this to override the default service endpoint URL */
  readonly autoscalingplans?: string;
  /** Use this to override the default service endpoint URL */
  readonly backup?: string;
  /** Use this to override the default service endpoint URL */
  readonly batch?: string;
  /** Use this to override the default service endpoint URL */
  readonly budgets?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloud9?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudformation?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudfront?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudhsm?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudsearch?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudtrail?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudwatch?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudwatchevents?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudwatchlogs?: string;
  /** Use this to override the default service endpoint URL */
  readonly codeartifact?: string;
  /** Use this to override the default service endpoint URL */
  readonly codebuild?: string;
  /** Use this to override the default service endpoint URL */
  readonly codecommit?: string;
  /** Use this to override the default service endpoint URL */
  readonly codedeploy?: string;
  /** Use this to override the default service endpoint URL */
  readonly codepipeline?: string;
  /** Use this to override the default service endpoint URL */
  readonly codestarconnections?: string;
  /** Use this to override the default service endpoint URL */
  readonly cognitoidentity?: string;
  /** Use this to override the default service endpoint URL */
  readonly cognitoidp?: string;
  /** Use this to override the default service endpoint URL */
  readonly configservice?: string;
  /** Use this to override the default service endpoint URL */
  readonly connect?: string;
  /** Use this to override the default service endpoint URL */
  readonly cur?: string;
  /** Use this to override the default service endpoint URL */
  readonly dataexchange?: string;
  /** Use this to override the default service endpoint URL */
  readonly datapipeline?: string;
  /** Use this to override the default service endpoint URL */
  readonly datasync?: string;
  /** Use this to override the default service endpoint URL */
  readonly dax?: string;
  /** Use this to override the default service endpoint URL */
  readonly devicefarm?: string;
  /** Use this to override the default service endpoint URL */
  readonly directconnect?: string;
  /** Use this to override the default service endpoint URL */
  readonly dlm?: string;
  /** Use this to override the default service endpoint URL */
  readonly dms?: string;
  /** Use this to override the default service endpoint URL */
  readonly docdb?: string;
  /** Use this to override the default service endpoint URL */
  readonly ds?: string;
  /** Use this to override the default service endpoint URL */
  readonly dynamodb?: string;
  /** Use this to override the default service endpoint URL */
  readonly ec2?: string;
  /** Use this to override the default service endpoint URL */
  readonly ecr?: string;
  /** Use this to override the default service endpoint URL */
  readonly ecrpublic?: string;
  /** Use this to override the default service endpoint URL */
  readonly ecs?: string;
  /** Use this to override the default service endpoint URL */
  readonly efs?: string;
  /** Use this to override the default service endpoint URL */
  readonly eks?: string;
  /** Use this to override the default service endpoint URL */
  readonly elasticache?: string;
  /** Use this to override the default service endpoint URL */
  readonly elasticbeanstalk?: string;
  /** Use this to override the default service endpoint URL */
  readonly elastictranscoder?: string;
  /** Use this to override the default service endpoint URL */
  readonly elb?: string;
  /** Use this to override the default service endpoint URL */
  readonly emr?: string;
  /** Use this to override the default service endpoint URL */
  readonly emrcontainers?: string;
  /** Use this to override the default service endpoint URL */
  readonly es?: string;
  /** Use this to override the default service endpoint URL */
  readonly firehose?: string;
  /** Use this to override the default service endpoint URL */
  readonly fms?: string;
  /** Use this to override the default service endpoint URL */
  readonly forecast?: string;
  /** Use this to override the default service endpoint URL */
  readonly fsx?: string;
  /** Use this to override the default service endpoint URL */
  readonly gamelift?: string;
  /** Use this to override the default service endpoint URL */
  readonly glacier?: string;
  /** Use this to override the default service endpoint URL */
  readonly globalaccelerator?: string;
  /** Use this to override the default service endpoint URL */
  readonly glue?: string;
  /** Use this to override the default service endpoint URL */
  readonly greengrass?: string;
  /** Use this to override the default service endpoint URL */
  readonly guardduty?: string;
  /** Use this to override the default service endpoint URL */
  readonly iam?: string;
  /** Use this to override the default service endpoint URL */
  readonly identitystore?: string;
  /** Use this to override the default service endpoint URL */
  readonly imagebuilder?: string;
  /** Use this to override the default service endpoint URL */
  readonly inspector?: string;
  /** Use this to override the default service endpoint URL */
  readonly iot?: string;
  /** Use this to override the default service endpoint URL */
  readonly iotanalytics?: string;
  /** Use this to override the default service endpoint URL */
  readonly iotevents?: string;
  /** Use this to override the default service endpoint URL */
  readonly kafka?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesis?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisanalytics?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisanalyticsv2?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisvideo?: string;
  /** Use this to override the default service endpoint URL */
  readonly kms?: string;
  /** Use this to override the default service endpoint URL */
  readonly lakeformation?: string;
  /** Use this to override the default service endpoint URL */
  readonly lambda?: string;
  /** Use this to override the default service endpoint URL */
  readonly lexmodels?: string;
  /** Use this to override the default service endpoint URL */
  readonly licensemanager?: string;
  /** Use this to override the default service endpoint URL */
  readonly lightsail?: string;
  /** Use this to override the default service endpoint URL */
  readonly macie?: string;
  /** Use this to override the default service endpoint URL */
  readonly macie2?: string;
  /** Use this to override the default service endpoint URL */
  readonly managedblockchain?: string;
  /** Use this to override the default service endpoint URL */
  readonly marketplacecatalog?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediaconnect?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediaconvert?: string;
  /** Use this to override the default service endpoint URL */
  readonly medialive?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediapackage?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediastore?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediastoredata?: string;
  /** Use this to override the default service endpoint URL */
  readonly mq?: string;
  /** Use this to override the default service endpoint URL */
  readonly mwaa?: string;
  /** Use this to override the default service endpoint URL */
  readonly neptune?: string;
  /** Use this to override the default service endpoint URL */
  readonly networkfirewall?: string;
  /** Use this to override the default service endpoint URL */
  readonly networkmanager?: string;
  /** Use this to override the default service endpoint URL */
  readonly opsworks?: string;
  /** Use this to override the default service endpoint URL */
  readonly organizations?: string;
  /** Use this to override the default service endpoint URL */
  readonly outposts?: string;
  /** Use this to override the default service endpoint URL */
  readonly personalize?: string;
  /** Use this to override the default service endpoint URL */
  readonly pinpoint?: string;
  /** Use this to override the default service endpoint URL */
  readonly pricing?: string;
  /** Use this to override the default service endpoint URL */
  readonly qldb?: string;
  /** Use this to override the default service endpoint URL */
  readonly quicksight?: string;
  /** Use this to override the default service endpoint URL */
  readonly ram?: string;
  /** Use this to override the default service endpoint URL */
  readonly rds?: string;
  /** Use this to override the default service endpoint URL */
  readonly redshift?: string;
  /** Use this to override the default service endpoint URL */
  readonly resourcegroups?: string;
  /** Use this to override the default service endpoint URL */
  readonly resourcegroupstaggingapi?: string;
  /** Use this to override the default service endpoint URL */
  readonly route53?: string;
  /** Use this to override the default service endpoint URL */
  readonly route53Domains?: string;
  /** Use this to override the default service endpoint URL */
  readonly route53Resolver?: string;
  /** Use this to override the default service endpoint URL */
  readonly s3?: string;
  /** Use this to override the default service endpoint URL */
  readonly s3Control?: string;
  /** Use this to override the default service endpoint URL */
  readonly s3Outposts?: string;
  /** Use this to override the default service endpoint URL */
  readonly sagemaker?: string;
  /** Use this to override the default service endpoint URL */
  readonly sdb?: string;
  /** Use this to override the default service endpoint URL */
  readonly secretsmanager?: string;
  /** Use this to override the default service endpoint URL */
  readonly securityhub?: string;
  /** Use this to override the default service endpoint URL */
  readonly serverlessrepo?: string;
  /** Use this to override the default service endpoint URL */
  readonly servicecatalog?: string;
  /** Use this to override the default service endpoint URL */
  readonly servicediscovery?: string;
  /** Use this to override the default service endpoint URL */
  readonly servicequotas?: string;
  /** Use this to override the default service endpoint URL */
  readonly ses?: string;
  /** Use this to override the default service endpoint URL */
  readonly shield?: string;
  /** Use this to override the default service endpoint URL */
  readonly signer?: string;
  /** Use this to override the default service endpoint URL */
  readonly sns?: string;
  /** Use this to override the default service endpoint URL */
  readonly sqs?: string;
  /** Use this to override the default service endpoint URL */
  readonly ssm?: string;
  /** Use this to override the default service endpoint URL */
  readonly ssoadmin?: string;
  /** Use this to override the default service endpoint URL */
  readonly stepfunctions?: string;
  /** Use this to override the default service endpoint URL */
  readonly storagegateway?: string;
  /** Use this to override the default service endpoint URL */
  readonly sts?: string;
  /** Use this to override the default service endpoint URL */
  readonly swf?: string;
  /** Use this to override the default service endpoint URL */
  readonly synthetics?: string;
  /** Use this to override the default service endpoint URL */
  readonly timestreamwrite?: string;
  /** Use this to override the default service endpoint URL */
  readonly transfer?: string;
  /** Use this to override the default service endpoint URL */
  readonly waf?: string;
  /** Use this to override the default service endpoint URL */
  readonly wafregional?: string;
  /** Use this to override the default service endpoint URL */
  readonly wafv2?: string;
  /** Use this to override the default service endpoint URL */
  readonly worklink?: string;
  /** Use this to override the default service endpoint URL */
  readonly workmail?: string;
  /** Use this to override the default service endpoint URL */
  readonly workspaces?: string;
  /** Use this to override the default service endpoint URL */
  readonly xray?: string;
}

function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accessanalyzer: cdktf.stringToTerraform(struct!.accessanalyzer),
    acm: cdktf.stringToTerraform(struct!.acm),
    acmpca: cdktf.stringToTerraform(struct!.acmpca),
    amplify: cdktf.stringToTerraform(struct!.amplify),
    apigateway: cdktf.stringToTerraform(struct!.apigateway),
    applicationautoscaling: cdktf.stringToTerraform(struct!.applicationautoscaling),
    applicationinsights: cdktf.stringToTerraform(struct!.applicationinsights),
    appmesh: cdktf.stringToTerraform(struct!.appmesh),
    appstream: cdktf.stringToTerraform(struct!.appstream),
    appsync: cdktf.stringToTerraform(struct!.appsync),
    athena: cdktf.stringToTerraform(struct!.athena),
    autoscaling: cdktf.stringToTerraform(struct!.autoscaling),
    autoscalingplans: cdktf.stringToTerraform(struct!.autoscalingplans),
    backup: cdktf.stringToTerraform(struct!.backup),
    batch: cdktf.stringToTerraform(struct!.batch),
    budgets: cdktf.stringToTerraform(struct!.budgets),
    cloud9: cdktf.stringToTerraform(struct!.cloud9),
    cloudformation: cdktf.stringToTerraform(struct!.cloudformation),
    cloudfront: cdktf.stringToTerraform(struct!.cloudfront),
    cloudhsm: cdktf.stringToTerraform(struct!.cloudhsm),
    cloudsearch: cdktf.stringToTerraform(struct!.cloudsearch),
    cloudtrail: cdktf.stringToTerraform(struct!.cloudtrail),
    cloudwatch: cdktf.stringToTerraform(struct!.cloudwatch),
    cloudwatchevents: cdktf.stringToTerraform(struct!.cloudwatchevents),
    cloudwatchlogs: cdktf.stringToTerraform(struct!.cloudwatchlogs),
    codeartifact: cdktf.stringToTerraform(struct!.codeartifact),
    codebuild: cdktf.stringToTerraform(struct!.codebuild),
    codecommit: cdktf.stringToTerraform(struct!.codecommit),
    codedeploy: cdktf.stringToTerraform(struct!.codedeploy),
    codepipeline: cdktf.stringToTerraform(struct!.codepipeline),
    codestarconnections: cdktf.stringToTerraform(struct!.codestarconnections),
    cognitoidentity: cdktf.stringToTerraform(struct!.cognitoidentity),
    cognitoidp: cdktf.stringToTerraform(struct!.cognitoidp),
    configservice: cdktf.stringToTerraform(struct!.configservice),
    connect: cdktf.stringToTerraform(struct!.connect),
    cur: cdktf.stringToTerraform(struct!.cur),
    dataexchange: cdktf.stringToTerraform(struct!.dataexchange),
    datapipeline: cdktf.stringToTerraform(struct!.datapipeline),
    datasync: cdktf.stringToTerraform(struct!.datasync),
    dax: cdktf.stringToTerraform(struct!.dax),
    devicefarm: cdktf.stringToTerraform(struct!.devicefarm),
    directconnect: cdktf.stringToTerraform(struct!.directconnect),
    dlm: cdktf.stringToTerraform(struct!.dlm),
    dms: cdktf.stringToTerraform(struct!.dms),
    docdb: cdktf.stringToTerraform(struct!.docdb),
    ds: cdktf.stringToTerraform(struct!.ds),
    dynamodb: cdktf.stringToTerraform(struct!.dynamodb),
    ec2: cdktf.stringToTerraform(struct!.ec2),
    ecr: cdktf.stringToTerraform(struct!.ecr),
    ecrpublic: cdktf.stringToTerraform(struct!.ecrpublic),
    ecs: cdktf.stringToTerraform(struct!.ecs),
    efs: cdktf.stringToTerraform(struct!.efs),
    eks: cdktf.stringToTerraform(struct!.eks),
    elasticache: cdktf.stringToTerraform(struct!.elasticache),
    elasticbeanstalk: cdktf.stringToTerraform(struct!.elasticbeanstalk),
    elastictranscoder: cdktf.stringToTerraform(struct!.elastictranscoder),
    elb: cdktf.stringToTerraform(struct!.elb),
    emr: cdktf.stringToTerraform(struct!.emr),
    emrcontainers: cdktf.stringToTerraform(struct!.emrcontainers),
    es: cdktf.stringToTerraform(struct!.es),
    firehose: cdktf.stringToTerraform(struct!.firehose),
    fms: cdktf.stringToTerraform(struct!.fms),
    forecast: cdktf.stringToTerraform(struct!.forecast),
    fsx: cdktf.stringToTerraform(struct!.fsx),
    gamelift: cdktf.stringToTerraform(struct!.gamelift),
    glacier: cdktf.stringToTerraform(struct!.glacier),
    globalaccelerator: cdktf.stringToTerraform(struct!.globalaccelerator),
    glue: cdktf.stringToTerraform(struct!.glue),
    greengrass: cdktf.stringToTerraform(struct!.greengrass),
    guardduty: cdktf.stringToTerraform(struct!.guardduty),
    iam: cdktf.stringToTerraform(struct!.iam),
    identitystore: cdktf.stringToTerraform(struct!.identitystore),
    imagebuilder: cdktf.stringToTerraform(struct!.imagebuilder),
    inspector: cdktf.stringToTerraform(struct!.inspector),
    iot: cdktf.stringToTerraform(struct!.iot),
    iotanalytics: cdktf.stringToTerraform(struct!.iotanalytics),
    iotevents: cdktf.stringToTerraform(struct!.iotevents),
    kafka: cdktf.stringToTerraform(struct!.kafka),
    kinesis: cdktf.stringToTerraform(struct!.kinesis),
    kinesisanalytics: cdktf.stringToTerraform(struct!.kinesisanalytics),
    kinesisanalyticsv2: cdktf.stringToTerraform(struct!.kinesisanalyticsv2),
    kinesisvideo: cdktf.stringToTerraform(struct!.kinesisvideo),
    kms: cdktf.stringToTerraform(struct!.kms),
    lakeformation: cdktf.stringToTerraform(struct!.lakeformation),
    lambda: cdktf.stringToTerraform(struct!.lambda),
    lexmodels: cdktf.stringToTerraform(struct!.lexmodels),
    licensemanager: cdktf.stringToTerraform(struct!.licensemanager),
    lightsail: cdktf.stringToTerraform(struct!.lightsail),
    macie: cdktf.stringToTerraform(struct!.macie),
    macie2: cdktf.stringToTerraform(struct!.macie2),
    managedblockchain: cdktf.stringToTerraform(struct!.managedblockchain),
    marketplacecatalog: cdktf.stringToTerraform(struct!.marketplacecatalog),
    mediaconnect: cdktf.stringToTerraform(struct!.mediaconnect),
    mediaconvert: cdktf.stringToTerraform(struct!.mediaconvert),
    medialive: cdktf.stringToTerraform(struct!.medialive),
    mediapackage: cdktf.stringToTerraform(struct!.mediapackage),
    mediastore: cdktf.stringToTerraform(struct!.mediastore),
    mediastoredata: cdktf.stringToTerraform(struct!.mediastoredata),
    mq: cdktf.stringToTerraform(struct!.mq),
    mwaa: cdktf.stringToTerraform(struct!.mwaa),
    neptune: cdktf.stringToTerraform(struct!.neptune),
    networkfirewall: cdktf.stringToTerraform(struct!.networkfirewall),
    networkmanager: cdktf.stringToTerraform(struct!.networkmanager),
    opsworks: cdktf.stringToTerraform(struct!.opsworks),
    organizations: cdktf.stringToTerraform(struct!.organizations),
    outposts: cdktf.stringToTerraform(struct!.outposts),
    personalize: cdktf.stringToTerraform(struct!.personalize),
    pinpoint: cdktf.stringToTerraform(struct!.pinpoint),
    pricing: cdktf.stringToTerraform(struct!.pricing),
    qldb: cdktf.stringToTerraform(struct!.qldb),
    quicksight: cdktf.stringToTerraform(struct!.quicksight),
    ram: cdktf.stringToTerraform(struct!.ram),
    rds: cdktf.stringToTerraform(struct!.rds),
    redshift: cdktf.stringToTerraform(struct!.redshift),
    resourcegroups: cdktf.stringToTerraform(struct!.resourcegroups),
    resourcegroupstaggingapi: cdktf.stringToTerraform(struct!.resourcegroupstaggingapi),
    route53: cdktf.stringToTerraform(struct!.route53),
    route53domains: cdktf.stringToTerraform(struct!.route53Domains),
    route53resolver: cdktf.stringToTerraform(struct!.route53Resolver),
    s3: cdktf.stringToTerraform(struct!.s3),
    s3control: cdktf.stringToTerraform(struct!.s3Control),
    s3outposts: cdktf.stringToTerraform(struct!.s3Outposts),
    sagemaker: cdktf.stringToTerraform(struct!.sagemaker),
    sdb: cdktf.stringToTerraform(struct!.sdb),
    secretsmanager: cdktf.stringToTerraform(struct!.secretsmanager),
    securityhub: cdktf.stringToTerraform(struct!.securityhub),
    serverlessrepo: cdktf.stringToTerraform(struct!.serverlessrepo),
    servicecatalog: cdktf.stringToTerraform(struct!.servicecatalog),
    servicediscovery: cdktf.stringToTerraform(struct!.servicediscovery),
    servicequotas: cdktf.stringToTerraform(struct!.servicequotas),
    ses: cdktf.stringToTerraform(struct!.ses),
    shield: cdktf.stringToTerraform(struct!.shield),
    signer: cdktf.stringToTerraform(struct!.signer),
    sns: cdktf.stringToTerraform(struct!.sns),
    sqs: cdktf.stringToTerraform(struct!.sqs),
    ssm: cdktf.stringToTerraform(struct!.ssm),
    ssoadmin: cdktf.stringToTerraform(struct!.ssoadmin),
    stepfunctions: cdktf.stringToTerraform(struct!.stepfunctions),
    storagegateway: cdktf.stringToTerraform(struct!.storagegateway),
    sts: cdktf.stringToTerraform(struct!.sts),
    swf: cdktf.stringToTerraform(struct!.swf),
    synthetics: cdktf.stringToTerraform(struct!.synthetics),
    timestreamwrite: cdktf.stringToTerraform(struct!.timestreamwrite),
    transfer: cdktf.stringToTerraform(struct!.transfer),
    waf: cdktf.stringToTerraform(struct!.waf),
    wafregional: cdktf.stringToTerraform(struct!.wafregional),
    wafv2: cdktf.stringToTerraform(struct!.wafv2),
    worklink: cdktf.stringToTerraform(struct!.worklink),
    workmail: cdktf.stringToTerraform(struct!.workmail),
    workspaces: cdktf.stringToTerraform(struct!.workspaces),
    xray: cdktf.stringToTerraform(struct!.xray),
  }
}

export interface AwsProviderIgnoreTags {
  /** Resource tag key prefixes to ignore across all resources. */
  readonly keyPrefixes?: string[];
  /** Resource tag keys to ignore across all resources. */
  readonly keys?: string[];
}

function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
  }
}


// Resource

export class AwsProvider extends cdktf.TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AwsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'aws'
    });
    this._accessKey = config.accessKey;
    this._allowedAccountIds = config.allowedAccountIds;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._profile = config.profile;
    this._region = config.region;
    this._s3ForcePathStyle = config.s3ForcePathStyle;
    this._secretKey = config.secretKey;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipGetEc2Platforms = config.skipGetEc2Platforms;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._skipRegionValidation = config.skipRegionValidation;
    this._skipRequestingAccountId = config.skipRequestingAccountId;
    this._token = config.token;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._endpoints = config.endpoints;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string;
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string  | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[];
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[]  | undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[];
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[]  | undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean;
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean  | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number  | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string;
  public get profile() {
    return this._profile;
  }
  public set profile(value: string  | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile
  }

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean;
  public get s3ForcePathStyle() {
    return this._s3ForcePathStyle;
  }
  public set s3ForcePathStyle(value: boolean  | undefined) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string;
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string  | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey
  }

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string;
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string  | undefined) {
    this._sharedCredentialsFile = value;
  }
  public resetSharedCredentialsFile() {
    this._sharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFileInput() {
    return this._sharedCredentialsFile
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean;
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean  | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation
  }

  // skip_get_ec2_platforms - computed: false, optional: true, required: false
  private _skipGetEc2Platforms?: boolean;
  public get skipGetEc2Platforms() {
    return this._skipGetEc2Platforms;
  }
  public set skipGetEc2Platforms(value: boolean  | undefined) {
    this._skipGetEc2Platforms = value;
  }
  public resetSkipGetEc2Platforms() {
    this._skipGetEc2Platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGetEc2PlatformsInput() {
    return this._skipGetEc2Platforms
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: boolean;
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: boolean  | undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean;
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean  | undefined) {
    this._skipRegionValidation = value;
  }
  public resetSkipRegionValidation() {
    this._skipRegionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegionValidationInput() {
    return this._skipRegionValidation
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean;
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean  | undefined) {
    this._skipRequestingAccountId = value;
  }
  public resetSkipRequestingAccountId() {
    this._skipRequestingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRequestingAccountIdInput() {
    return this._skipRequestingAccountId
  }

  // token - computed: false, optional: true, required: false
  private _token?: string;
  public get token() {
    return this._token;
  }
  public set token(value: string  | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsProviderAssumeRole[];
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsProviderAssumeRole[]  | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsProviderEndpoints[];
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsProviderEndpoints[]  | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsProviderIgnoreTags[];
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsProviderIgnoreTags[]  | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedAccountIds),
      forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._forbiddenAccountIds),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      s3_force_path_style: cdktf.booleanToTerraform(this._s3ForcePathStyle),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      skip_get_ec2_platforms: cdktf.booleanToTerraform(this._skipGetEc2Platforms),
      skip_metadata_api_check: cdktf.booleanToTerraform(this._skipMetadataApiCheck),
      skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
      skip_requesting_account_id: cdktf.booleanToTerraform(this._skipRequestingAccountId),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: cdktf.listMapper(awsProviderAssumeRoleToTerraform)(this._assumeRole),
      endpoints: cdktf.listMapper(awsProviderEndpointsToTerraform)(this._endpoints),
      ignore_tags: cdktf.listMapper(awsProviderIgnoreTagsToTerraform)(this._ignoreTags),
    };
  }
}
